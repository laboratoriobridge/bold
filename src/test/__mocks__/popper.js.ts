import PopperJs from 'popper.js'

export default class Popper {
    static placements = (PopperJs as any).placements

    constructor() {
        return {
            destroy: () => null,
            scheduleUpdate: () => null,
        }
    }
}
