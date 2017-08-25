export default class ByteUtil {

    public static formatBytes(bytes: number, decimals?: number): string {
        if (bytes === 0) { return '0 Bytes' }
        let k = 1000,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    }

}

