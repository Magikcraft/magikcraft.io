/// <reference types="../magikcraft.io/magikcraft.io" />

const magik = magikcraft.io;
const mct1 = magikcraft.io.global('mct1') as any;

export function setupBars(callback: Function) {
    const Bars = magik.Bars;
    const TextComponent = magik.TextComponent;

    if (mct1.initialised) {
        return;
    }
    const insulin = Bars.addBar(magik.getSender(),
        new TextComponent("Insulin"),
        Bars.Color.BLUE,
        Bars.Style.NOTCHED_20,
        0.0, // Progress (0.0 - 1.0)
    );

    const bgl = Bars.addBar(magik.getSender(),
        new TextComponent("BGL"),
        Bars.Color.RED,
        Bars.Style.NOTCHED_20,
        0.0 // Progress (0.0 - 1.0)
    );

    callback({ insulin, bgl });
}