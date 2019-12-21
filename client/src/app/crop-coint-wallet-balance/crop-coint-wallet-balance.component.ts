import { Component, OnInit } from '@angular/core';
import {EthcontractService} from '../ethcontract.service';

@Component({
  selector: 'app-crop-coint-wallet-balance',
  templateUrl: './crop-coint-wallet-balance.component.html',
  styleUrls: ['./crop-coint-wallet-balance.component.css']
})
export class CropCointWalletBalanceComponent implements OnInit {

  constructor(ethcontractService:EthcontractService) { }

  ngOnInit() {
  }

}
