class ResponseHandler {
    constructor() {
        this.success = 'Request is successful';
        this.failure = 'Request is failed';
    }

    successResponse(res, body) {
        res.status(200).send({
            status: this.success,
            body: body || {}
        });
    }

    failureResponse(res, body) {
        res.status(400).send({
            status: this.failure,
            body: body || {}
        });
    }

    createdResponse(res, body) {
        res.status(201).send({
            status: this.success,
            body: body || {}
        });
    }

    notFoundResponse(res, body) {
        res.status(404).send({
            status: this.failure,
            body: body || {}
        });
    }

    internalServerErrorResponse(res, body) {
        res.status(500).send({
            status: this.failure,
            body: body || {}
        });
    }
    errorResponse(res, error) {
        res.status(500).send({
            status: this.failure,
            body: error || {}
        });
    }
}

module.exports = ResponseHandler;