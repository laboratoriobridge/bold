export interface ZIndex {
    /**
     * Modal backdrop
     */
    modalBackdrop: number

    /**
     * Modal container
     */
    modalContainer: number

    /**
     * Popper items (Tooltip, Dropdown, Popper and PopperFocus)
     */
    overlays: number
}

export const zIndex: ZIndex = {
    modalBackdrop: 1030,
    modalContainer: 1040,
    overlays: 1050,
}
