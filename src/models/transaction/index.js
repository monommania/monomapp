import Store from '../../models/store';
import {TransactionModelFirestore} from 'poscore/dist/domains/transaction/transaction.model.firestore';
import {TransactionService} from 'poscore/dist/domains/transaction/transaction.service';

const TransactionModel = {
    current: [],
    fetchByDate: async function(date) {
        const model = new TransactionModelFirestore(Store)
        const service = new TransactionService(model);
        const emptyTransactions = [
            {
                date: "",
                time: "",
                items: [
                    {name: "Traksaksi Kosong"},
                ],
                summary: {
                    qty: 0,
                    total: 0
                }
            }
        ]
        // const date = (new Date());
        
        return await service.fetchByDate(date).then(result => {
            this.current = result.length ? result : emptyTransactions;
            return Promise.resolve(this.current);
        });
    }
}

export default TransactionModel;