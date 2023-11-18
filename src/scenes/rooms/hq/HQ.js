import RoomScene from '../RoomScene'

import { Animation, Button, SimpleButton, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class HQ extends RoomScene {

    constructor() {
        super("HQ");

        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Image} */
        this.fishCatalog;
        /** @type {Phaser.GameObjects.Image} */
        this.missionsButton;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'sport': () => this.triggerRoom(200, 1214, 620)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hq-pack", "assets/media/rooms/hq/hq-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        const background = this.add.image(0, 0, "hq", "background.png");
        background.setOrigin(0, 0);

        // cabinet
        this.add.image(1466, 593, "hq", "cabinet0001.png");

        // door
        const door = this.add.sprite(181, 585.5859485489623, "hq", "door-open0001.png");
        door.setOrigin(0.5, 0.9232262532986235);

        // greenchair
        this.add.image(608, 596, "hq", "greenchair.png");

        // redchair
        this.add.image(943, 607, "hq", "redchair.png");

        // fishCatalog
        const fishCatalog = this.add.image(1400, 791, "hq", "FishCatalog0001.png");

        // missionsButton
        const missionsButton = this.add.image(1415, 899, "hq", "MissionsButton0001.png");

        // lists
        const sort = [];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.door.play('door');
        new MoveTo(door);

        // fishCatalog (components)
        const fishCatalogSimpleButton = new SimpleButton(fishCatalog);
        fishCatalogSimpleButton.callback = () => this.interface.loadWidget('PSAFish');

        // missionsButton (components)
        const missionsButtonSimpleButton = new SimpleButton(missionsButton);
        missionsButtonSimpleButton.callback = () => this.interface.loadWidget('PSAMission');

        this.door = door;
        this.fishCatalog = fishCatalog;
        this.missionsButton = missionsButton;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
