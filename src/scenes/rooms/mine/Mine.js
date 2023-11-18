
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
		this.add.image(762, 487, "mine", "mine-background.png");

		// goldminemine_goldmine
		const goldminemine_goldmine = this.add.sprite(767, 236, "mine", "mine-goldmine0001.png");
		goldminemine_goldmine.play("goldminemine-goldmine");

		// mine_lights_png
		this.add.image(801, 166, "mine", "mine-lights.png");

		// mine_prgoldmineandtracks_png
		this.add.image(896, 290, "mine", "mine-prgoldmineandtracks.png");

		// mine_cartsandrocks_png
		this.add.image(938, 330, "mine", "mine-cartsandrocks.png");

		// mine_prtable_png
		this.add.image(588, 352, "mine", "mine-prtable.png");

		// mine_foreground_png
		this.add.image(765, 478, "mine", "mine-foreground.png");

		// phonemine_prphone
		const phonemine_prphone = this.add.sprite(539, 350, "mine", "mine-prphone0001.png");
		phonemine_prphone.play("phonemine-prphone");

		// bulbmine_bulb
		const bulbmine_bulb = this.add.sprite(825, 182, "mine", "mine-bulb0001.png");
		bulbmine_bulb.play("bulbmine-bulb");

		// mine_puffleshadow_png
		this.add.image(643, 357, "mine", "mine-puffleshadow.png");

		// pufflemine_puffle
		const pufflemine_puffle = this.add.sprite(643, 341, "mine", "mine-puffle0001.png");
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
