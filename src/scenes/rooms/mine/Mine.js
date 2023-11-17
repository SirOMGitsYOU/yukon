
// You can write more code here

/* START OF COMPILED CODE */

class Mine extends Phaser.Scene {

	constructor() {
		super("Mine");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mine_background_png
		this.add.image(0, 0, "mine", "mine-background.png");

		// goldminemine_goldmine
		const goldminemine_goldmine = this.add.sprite(5, -251, "mine", "mine-goldmine0001.png");
		goldminemine_goldmine.play("goldminemine-goldmine");

		// mine_lights_png
		this.add.image(39, -321, "mine", "mine-lights.png");

		// mine_prgoldmineandtracks_png
		this.add.image(134, -197, "mine", "mine-prgoldmineandtracks.png");

		// mine_cartsandrocks_png
		this.add.image(176, -157, "mine", "mine-cartsandrocks.png");

		// mine_prtable_png
		this.add.image(-174, -135, "mine", "mine-prtable.png");

		// mine_foreground_png
		this.add.image(3, -9, "mine", "mine-foreground.png");

		// phonemine_prphone
		const phonemine_prphone = this.add.sprite(-223, -137, "mine", "mine-prphone0001.png");
		phonemine_prphone.play("phonemine-prphone");

		// bulbmine_bulb
		const bulbmine_bulb = this.add.sprite(63, -305, "mine", "mine-bulb0001.png");
		bulbmine_bulb.play("bulbmine-bulb");

		// mine_puffleshadow_png
		this.add.image(-119, -130, "mine", "mine-puffleshadow.png");

		// pufflemine_puffle
		const pufflemine_puffle = this.add.sprite(-119, -146, "mine", "mine-puffle0001.png");
		pufflemine_puffle.play("pufflemine-puffle");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
