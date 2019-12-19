import { Component } from '@angular/core';
import { EthcontractService } from './ethcontract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  accounts: any;
  transferFrom = '0x0';
  balance = '0 ETH';
  transferTo = '';
  amount = 0;
  remarks = '';
  constructor(private ethcontractService: EthcontractService) {
    this.initAndDisplayAccount();

  }
  initAndDisplayAccount = () => {
    let that = this;
    this.ethcontractService.getAccountInfo().then(function (acctInfo: any) {
      that.transferFrom = acctInfo.fromAccount;
      that.balance = acctInfo.balance;
      console.log("accInfo is :", acctInfo);
    }).catch(function (error) {
      console.log(error);
    });
  };

}
