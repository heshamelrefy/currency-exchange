import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { CurrencyExchangeService, PeriodicHistoryElement } from '../../shared/service/currency-exchange.service';
import { StorageService } from '../../shared/service/storage.service';
import { MatTableDataSource } from '@angular/material/table';

export interface HistoryElement {
    id: number;
    date: string;
    event: string;
    actions: string;
    amount?: number;
    fromCurrency?: string;
    toCurrency?: string;
}

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
    periodicHistoryData: HistoryElement[];
    displayedHistoricalColumns: string[] = ['date', 'event', 'actions'];
    periodicHistoryDataSource: MatTableDataSource<HistoryElement>;

    constructor(private currencyExchangeService: CurrencyExchangeService, private router: Router) {}

    ngOnInit() {
        this.periodicHistoryData = this.customHistoryData() || [];
        this.periodicHistoryDataSource = new MatTableDataSource(this.periodicHistoryData);
    }

    customHistoryData() {
        return this.currencyExchangeService.periodicHistoryExchangeRates.map(
            (item: PeriodicHistoryElement): HistoryElement => {
                return {
                    id: item.id,
                    date: item.date,
                    event: `Converted an amount of ${item.amount} from ${item.fromCurrency} to ${item.toCurrency}`,
                    actions: '',
                    amount: item.amount,
                    fromCurrency: item.fromCurrency,
                    toCurrency: item.toCurrency,
                };
            },
        );
    }

    setCurrencyJob(amount: string, fromCurrency: string, toCurrency: string) {
        this.router.navigate(['converter']).then();

        this.currencyExchangeService.toggleServiceReferral();

        this.currencyExchangeService.converterForm = new UntypedFormGroup({
            amountControl: new UntypedFormControl(amount, [Validators.required]),
            fromControl: new UntypedFormControl(fromCurrency, [Validators.required]),
            toControl: new UntypedFormControl(toCurrency, [Validators.required]),
        });
    }

    removeCurrencyItem(element: PeriodicHistoryElement) {
        this.currencyExchangeService.periodicHistoryExchangeRates = this.filterHistoryList(element);

        this.setFilteredDataToStorage();

        this.periodicHistoryDataSource = new MatTableDataSource(this.customHistoryData());
    }

    filterHistoryList(item: PeriodicHistoryElement): PeriodicHistoryElement[] {
        return this.currencyExchangeService.periodicHistoryExchangeRates.filter(
            (matchedItem) => matchedItem.id !== item.id,
        );
    }

    setFilteredDataToStorage() {
        StorageService.setObject('exchangeRates', [...this.currencyExchangeService.periodicHistoryExchangeRates]);
    }
}
