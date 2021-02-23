import { Pipe, PipeTransform } from "@angular/core";
import { AppConfigurationService } from '../app-configuration/app-configuration.service';
import { LocalizationService } from "./localization.service";

@Pipe({
    name: 'localize'
})
export class LocalizePipe implements PipeTransform {

    constructor(private readonly appConfigService: AppConfigurationService) { }

    transform(value: string) {
        if (!value)
            return;
            
        return this.appConfigService.dictionary[value] || value;
    }
}