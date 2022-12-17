import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['discrete-ape-11180-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGlzY3JldGUtYXBlLTExMTgwJJU2caU94oRxl9D07pLEqfyi1kvoKxYMcoZymZc',
          password:
            '7cR1p8a5xJyABIYfVYCA3bpnjRvMu7gvtc7Jnpeaa-lYOs7WiF2HsQ6dEtP0q7PW2YnIJw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
