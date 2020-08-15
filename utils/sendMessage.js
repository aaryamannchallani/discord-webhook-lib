const axios = require('axios')

class sendMessage {
    constructor(url){
        this.url = url
    }
    setName(username="discord-hooks"){
        this.username=username
    }
    setAvatar(avatar='https://i.imgur.com/oBPXx0D.png'){
        this.avatar=avatar
    }
    async sendMessage(content="ping!"){
        this.content=content
        var payload = {
            "username":`${this.username}`,
            "content":`${this.content}`,
            "avatar_url":`${this.avatar}`
        }
        await axios.post(this.url,payload)
    }
}

module.exports = {
    sendMessage
}