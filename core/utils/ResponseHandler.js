class ResponseHandler {
    constructor() {
        this.success = 'Request is successful';
        this.failure = 'Request is failed';
    }

    static successResponse(res, body) {
        res.status(200).send({
            status: this.success,
            body: body || {}
        });
    }

    static failureResponse(res, body) {
        res.status(400).send({
            status: this.failure,
            body: body || {}
        });
    }

    static createdResponse(res, body) {
        res.status(201).send({
            status: this.success,
            body: body || {}
        });
    }

    static notFoundResponse(res, body) {
        res.status(404).send({
            status: this.failure,
            body: body || {}
        });
    }

    static internalServerErrorResponse(res, body) {
        res.status(500).send({
            status: this.failure,
            body: body || {}
        });
    }
    static errorResponse(res, error) {
        res.status(500).send({
            status: this.failure,
            body: error || {}
        });
    }
}

module.exports = ResponseHandler;