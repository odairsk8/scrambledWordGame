import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {

    private readonly playerStorageKey = 'scrambled-game-player';

    private player: Player;

    getPlayer(): Player {
        this.loadPlayer();
        return this.player;
    }

    save(player: Player) {
        this.player = player;
        this.savePlayer();
    }

    resetUser() {
        this.player = new Player();
        this.savePlayer();
    }

    private savePlayer() {
        localStorage.setItem(this.playerStorageKey, JSON.stringify(this.player));
    }
    private loadPlayer() {
        let user = localStorage.getItem(this.playerStorageKey);
        if (user)
            this.player = Object.assign(new Player(), JSON.parse(user));
        else {
            this.player = new Player();
            this.savePlayer();
        }

    }
}