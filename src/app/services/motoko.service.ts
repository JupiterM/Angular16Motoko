import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const motokoCreateActor = require('../../declarations/motoko').createActor;

@Injectable({
  providedIn: 'root'
})
export class MotokoService {
  private motokoActor = motokoCreateActor(environment.MOTOKO_CANISTER_ID, {
    agentOptions: {
        host: environment.MOTOKO_CANISTER_HOST
    }
  });

  constructor() {}

  public async greet(name:string): Promise<any>{
    return await this.motokoActor.greet(name);
  }
  public async test(): Promise<any>{
    return await this.motokoActor.test();
  }
}