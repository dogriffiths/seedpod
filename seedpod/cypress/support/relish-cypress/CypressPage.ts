import Component from "../relish-core/Component";

// <reference path="cypress/types/index.d.ts" />

function terminalLog(violations: any[]) {
    cy.task(
        'log',
        `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )

    cy.task('table', violationData)
    console.table(violationData)
}


class CypressPage extends Component {
  path: string;

  constructor(path: string) {
    super(null);
    this.path = path;
  }

  getPath(): string {
    return this.path;
  }

  assertVisible() {
    cy.url().should(url =>
      expect(url).to.satisfy(
        (u: string) => this.matchesUrl(u),
        `Page never became visible. URL is ${url}`
      )
    );
  }

  assertInvisible() {
    cy.url().should(url =>
      expect(url).to.satisfy(
        (u: string) => !this.matchesUrl(u),
        `Page never became invisible. URL is ${url}`
      )
    );
  }

  assertAccessible() {
      this.assertVisible();
      cy.injectAxe();
      cy.checkA11y(null, {}, terminalLog);
  }

  matchesUrl(currentUrl: string): boolean {
    return currentUrl === `${Cypress.config().baseUrl}${this.getPath()}`;
  }

  refreshPage() {
    cy.reload();
  }

  launch() {
    const url = `${this.getPath()}`;
    cy.visit(url);
  }
}

export default CypressPage;
