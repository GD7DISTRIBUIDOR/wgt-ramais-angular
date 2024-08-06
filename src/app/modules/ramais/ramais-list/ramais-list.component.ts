import { Component, OnInit } from '@angular/core';
import { RamaisInterfaceDatas } from '../../../models/ramais.interface';
import { RamaisDatas } from '../../../helpers/RamaisDatas';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: []
})
export class RamaisListComponent implements OnInit {

  ramaisData: Array<RamaisInterfaceDatas> = RamaisDatas
  empresas: { [key: string]: { [key: string]: RamaisInterfaceDatas[] } } = {};

  ngOnInit(): void {
      this.groupByEmpresa();
  }

  groupByEmpresa(): void {
    this.ramaisData.forEach(item => {
      if (item.NOME !== 'LIVRE') {
        if (!this.empresas[item.EMPRESA]) {
          this.empresas[item.EMPRESA] = {};
        }
        if (!this.empresas[item.EMPRESA][item.SETOR]) {
          this.empresas[item.EMPRESA][item.SETOR] = [];
        }
        this.empresas[item.EMPRESA][item.SETOR].push(item);
      }
    });
  }

  getEmpresas(): string[] {
    return Object.keys(this.empresas);
  }

  getSetores(empresa: string): string[] {
    return Object.keys(this.empresas[empresa]);
  }
}