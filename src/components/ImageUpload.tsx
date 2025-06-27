import { useState, useRef } from 'react'
import { UploadedImage } from '../types'

interface ImageUploadProps {
  onImageUpload: (imageData: UploadedImage) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result)
        } else {
          reject(new Error('Failed to convert file to base64'))
        }
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.')
      return
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert('File size must be less than 10MB.')
      return
    }

    try {
      const base64 = await convertToBase64(file)
      const preview = URL.createObjectURL(file)
      
      const imageData: UploadedImage = {
        file,
        base64,
        preview
      }

      onImageUpload(imageData)
    } catch (error) {
      console.error('Error processing file:', error)
      alert('Error processing file. Please try again.')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="image-upload">
      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <div className="upload-content">
          <div className="upload-icon">📸</div>
          <h3>Upload Product Image</h3>
          <p>Drag and drop an image here, or click to select</p>
          <p className="upload-note">
            Supported formats: JPG, PNG, GIF (Max 10MB)
          </p>
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default ImageUpload 