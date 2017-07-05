const magik = magikcraft.io;
interface MCT1 {
    initialised: boolean;
    state?: {
        bgl: number;
        insulin: number;
    };
    bars?: {
        bgl: BossBar;
        insulin: BossBar;
    };
}
const mct1 = <MCT1> magik.global('mct1');

export function setupBars(callback: (bars: any) => void) {
    const Bars = magik.Bars;

    if (mct1.initialised) {
        return;
    }
    const insulin = Bars.addBar(magik.getSender(),
        magik.TextComponent("Insulin"),
        Bars.Color.BLUE,
        Bars.Style.NOTCHED_20,
        0.0, // Progress (0.0 - 1.0)
    );

    const bgl = Bars.addBar(magik.getSender(),
        magik.TextComponent("BGL"),
        Bars.Color.RED,
        Bars.Style.NOTCHED_20,
        0.0 // Progress (0.0 - 1.0)
    );

    callback({ insulin, bgl });
}

function jump(power = 100) {
    magik.exsultus(power);
}
