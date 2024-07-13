import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../core/core.module';
import { appRoutes, AppRoutingModule } from '../../app-routing.module';
import { HistoryComponent } from '../history/history.component';
import { CurrencyExchangeService } from '../../shared/service/currency-exchange.service';
import { ExchangeRatesApiRequestService } from '../../shared/service/exchange-rates-api-request.service';
import { StorageService } from '../../shared/service/storage.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('ConverterComponent', () => {
    let compiled: ConverterComponent;
    let fixture: ComponentFixture<ConverterComponent>;
    let dElement: DebugElement;
    let hElement: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ConverterComponent, HistoryComponent],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CoreModule,
                    AppRoutingModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatTableModule,
                    MatAutocompleteModule,
                    RouterModule.forRoot(appRoutes, {}),
                ],
                providers: [
                    CurrencyExchangeService,
                    ExchangeRatesApiRequestService,
                    StorageService,
                    {
                        provide: APP_BASE_HREF,
                        useValue: '/converter',
                    },
                ],
            })
                .compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(ConverterComponent);

                    compiled = fixture.componentInstance;

                    dElement = fixture.debugElement.query(By.css('form'));
                    hElement = dElement.nativeElement;
                });
        }),
    );

    it(
        'should have a header which says `I want to convert`',
        waitForAsync(() => {
            hElement = fixture.debugElement.query(By.css('h1')).nativeElement;

            expect(hElement.innerText).toEqual('I want to convert');
        }),
    );

    it(
        'should not be able to click `CONVERT` button while it is disabled',
        waitForAsync(() => {
            fixture.detectChanges();

            spyOn(compiled, 'exchangeRates');

            hElement = fixture.debugElement.query(By.css('button')).nativeElement;

            hElement.click();

            expect(compiled.exchangeRates).toHaveBeenCalledTimes(0);
        }),
    );

    it(
        'form should be invalid while input fields are empty',
        waitForAsync(() => {
            fixture.detectChanges();

            compiled.converterForm.controls['amountControl'].setValue('');
            compiled.converterForm.controls['fromControl'].setValue('');
            compiled.converterForm.controls['toControl'].setValue('');

            expect(compiled.converterForm.valid).toBeFalsy();
        }),
    );

    it(
        'form should be valid while input fields are filled',
        waitForAsync(() => {
            fixture.detectChanges();

            compiled.converterForm.controls['amountControl'].setValue(1);
            compiled.converterForm.controls['fromControl'].setValue('EUR');
            compiled.converterForm.controls['toControl'].setValue('TRY');

            expect(compiled.converterForm.valid).toBeTruthy();
        }),
    );
});
