export const isImage = (ext: string) => {
    return ['png', 'jpg', 'jpeg'].map(ex => ex === ext)
}