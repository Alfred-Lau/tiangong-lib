/**
 * 判断是否是视频，支持的格式
 * @param url
 */
export function isVideo(url:string):boolean {
    const MEDIA_REG = /\.(mp4|ogg|webm)$/g
    if (!url){
        return false
    }
    return MEDIA_REG.test(url)

}

