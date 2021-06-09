import './commands'
import 'cypress-xpath'
import 'cypress-axe'

declare global {
    namespace Cypress {
        interface Chainable {
            injectAxe(): void;
            checkA11y(context?: any,
                      options?: any,
                      violationCallback?: (violations: any[]) => void,
                      skipFailures?: boolean): void;
        }
    }
}
