import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const strigifyResponse = (): middy.MiddlewareObj<
APIGatewayProxyEvent,
APIGatewayProxyResult
> => {
    const after: middy.MiddlewareFn<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
    > = async (request): Promise<void> => {
        request.response = {
            statusCode: 200,
            body: JSON.stringify(request.response),
        };
    };

    return { after };
};

export const middyfy = (handler) => {
    return middy(handler).use(strigifyResponse()).use(middyJsonBodyParser());
};
