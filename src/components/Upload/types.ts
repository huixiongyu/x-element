export type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
export interface UploadProps {
  action: string
  beforeUpload?: (file: File) => boolean
}

export interface UploadEmits {}
