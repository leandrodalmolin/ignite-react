import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tr>
                        <td width="50%">Website development</td>
                        <td>
                            <PriceHighlight variant="income">
                                £3,000.00
                            </PriceHighlight>
                        </td>
                        <td>Sale</td>
                        <td>25/01/2023</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburger</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                - £10.00
                            </PriceHighlight>
                        </td>
                        <td>Food</td>
                        <td>20/01/2 023</td>
                    </tr>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}