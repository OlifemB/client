import * as auth from './auth.api'
import * as files from './files.api'
export * from './dto/auth.dto'
export * from './dto/files.dto'

export const api = {
    auth,
    files
}