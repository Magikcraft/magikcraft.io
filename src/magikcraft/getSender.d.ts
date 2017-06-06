declare namespace magikcraft.io {
    export namespace io {
       /**
         * Return a reference to the current player Bukkit API object.
         * On Magikcraft campaign servers this will return null if you do not have sufficient permissions.
         * On Magikcraft Open Source Platform servers this always returns a reference to the player Bukkit API object.
         *
         */
        export function getSender(): BukkitPlayer;
    }
}
