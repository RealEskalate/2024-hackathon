declare module 'intl-tel-input' {
    // Declare the main function
    const intlTelInput: intlTelInput.Plugin;
    export = intlTelInput;
  
    // Extend the intlTelInput namespace
    namespace intlTelInput {
      // Define the Plugin interface
      interface Plugin {
        (input: HTMLInputElement, options?: Options): Plugin;
        promise: Promise<void>; // Add the promise property
        getNumber(): string;
        setNumber(number: string): void;
        getSelectedCountryData(): CountryData;
        setCountry(countryCode: string): void;
        isValidNumber(): boolean; // Add the isValidNumber method
        getValidationError(): number; // Add the getValidationError method
        destroy(): void; // Add the destroy method
      }
  
      // Define the Options type (add more options if needed)
      interface Options {
        initialCountry?: string;
        preferredCountries?: string[];
        utilsScript?: string;
      }
  
      // Define the CountryData type
      interface CountryData {
        name: string;
        iso2: string;
        dialCode: string;
        priority: number;
        areaCodes?: string[];
      }
    }
  }
  