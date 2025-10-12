

class OldPaymentProcessor {
    processPayment(amountInDollars) {
        console.log(`Deducting amount ${amountInDollars/100} cents`);    
    }
}


// Violates OCP
class OldPaymentProcessor {
    processPayment(amountInDollars, source) {
        if (source == 'internal') {
            console.log(`Deducting amount ${amountInDollars/100} cents`);    
        } else {
            console.log(`Deducting amount ${amountInDollars} cents`);    
        }
    }
}


// Payment process to behave in a way whereIn it can take amount in cents

class NewPaymentProcessor {
    processPayment(amountInCents) {
        console.log(`Deducting amount ${amountInCents} cents`);    
    }
}

class PaymentAdapter {
    constructor (newPaymentProcessor) {
        this.paymentProcessor = newPaymentProcessor;
    }

    processPayment (amountInDollars) {
        this.paymentProcessor.processPayment(amountInDollars * 100);
    }
}


// Main / client code / oldSorce 
// Input was in dollars
const paymentProcessor = new NewPaymentProcessor()
const paymentGateway = new PaymentAdapter(paymentProcessor);
paymentGateway.processPayment(10);


// new Source
paymentProcessor.processPayment(100)
