<template>
  <div>
    <div class="file-upload-container" @click.prevent="triggerUpload">
      <slot v-if="fileStatus === 'loading'" name="loading">
        <Button class="btn btn-primary" disabled>正在上传...</Button>
      </slot>
      <slot v-else-if="fileStatus === 'success'" name="uploaded" :uploadedData="uploadedData">
        <Button class="btn btn-primary">上传成功</Button>
      </slot>
      <slot v-else>
        <Button class="btn btn-primary">点击上传</Button>
      </slot>
    </div>
    <input type="file" name="file" ref="fileInput" @change.prevent="handleFileChange" />
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { UploadStatus } from './types.ts'
import type { UploadProps } from './types.ts'
import { ref } from 'vue'
import Button from '../Button/Button.vue'
const props = defineProps<UploadProps>()
const fileInput = ref<null | HTMLInputElement>(null)
let fileStatus = ref<UploadStatus>('ready')
const triggerUpload = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}
const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files) {
    fileStatus.value = 'loading'
    const files = Array.from(target.files)
    if (props.befeoreUpload) {
      const result = props.befeoreUpload(files[0])
      if (!result) {
        return
      }
    }
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('icode', '3CCF1A7BE6218FCC')
    axios
      .post(props.action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((resp: any) => {
        console.log(resp.data)
        fileStatus.value = 'success'
        // emit('file-uploaded', res.data)
      })
      .catch(() => {
        fileStatus.value = 'error'
        // emit('file-uploaded-error', { error })
      })
      .finally(() => {
        if (fileInput.value) {
          fileInput.value.value = ''
        }
      })
  }
}
</script>
