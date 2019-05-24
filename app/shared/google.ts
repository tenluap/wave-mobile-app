import Axios from 'axios';
// import { readFile, readFileSync } from 'fs';

var url = 'https://www.googleapis.com/storage/v1'

export namespace GoogleStorage {
    export class bucket {
        private bucket: string
        private tokens: string

        constructor(bucketName: string, tokens: string) {
            this.bucket = bucketName
            this.tokens = tokens
        }

        async get() {
            var path = `${url}/b/${this.bucket}/o`
            try {
                var data = await Axios.get(path, { params: { keys: this.tokens } })
                console.log(data.data)
            } catch (error) {
                console.log(error)
            }

        }

        // async insert(fileName: string, filepath:string) {
        //     var path = `https://www.googleapis.com/upload/storage/v1/b/${this.bucket}/o`

        //     var file = await readFileSync(filepath)

        //     var data = await Axios.post(path, file, { params: {keys: this.tokens, uploadType: "media", name: fileName }, headers: { 'Content-Type': 'application/pdf' } })
        //     return data.data
        // }


    }
}

export var bucket = new GoogleStorage.bucket('beliepedia', "AIzaSyCQ3qqVYDyImsKUc6oCl0epjsCDRaKr0ec")