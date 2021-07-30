import React from 'react'
import {Upload,Button,message} from 'antd'
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'http://3.226.17.158:8084/storage/v1/storage/upload',
  headers: {
    Authorization: 'token',
    RequestInfo: JSON.stringify({
      appCode: 'management-after-sale',
      requestId: new Date().getTime(),
      language: 'EN',
      timeZone: Intl.DateTimeFormat().resolvedOptions()
        .timeZone,
      currentUserId: 'fdc93a26-a3d1-103a-9a28-b12c77ea72ec'
    })
  },
  beforeUpload(file) {
    console.log(file)
    return new Promise(resolve => {
      let obj = {
        file,
        user:'name'
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader)
        resolve(reader.result)
      }
      
      
      
    });
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent => `${parseFloat(percent.toFixed(2))}%`,
  },
};
class Inbox extends React.Component{
  
    state = {
      
    }
    handle = ()=>{
      console.log(this.test())
    }
    test = ()=>{
      return new Promise(resolve=>{
        var formdata = new FormData();//创建一个表单
      formdata.append('file', 'file');  // 上传的文件
      formdata.append('fileName','file.file.')
      resolve(formdata)
      })
    }

  render(){
    console.log(this)
    return(
      <div>
        <Button type="primary" onClick={this.handle}>click</Button>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    )
  }
}

export default Inbox;