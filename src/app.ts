import express, { json, Request, Response } from 'express';
import { prisma } from './database.js';
import { RelationalJson, Converter, OutputGenerator } from 'json-conversion-tool';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get('/repositories/csv', async (req: Request, res: Response) => {
	try {
		const repositories = await prisma.repositories.findMany({
			where: {
				hasSponsorship: true
			},
			take: 10
		});

		const json = JSON.stringify(repositories);
		fs.writeFile('sponsored-repos.json', json, 'utf8', function(err) {
			if (err) {
				console.log('An error occured while writing JSON Object to File.');
				return console.log(err);
			}

			console.log('JSON file has been saved.');
		});

		const relationalJson: RelationalJson = new Converter().convertJson(repositories, {});
		const outputGenerator = new OutputGenerator(relationalJson);
		const csv = outputGenerator.generateCsv();

    fs.writeFile('most-famous-sponsored-repos.csv', csv, 'utf8', function(err) {
			if (err) {
				console.log('An error occured while writing CSV to File.');
				return console.log(err);
			}

			console.log('CSV file has been saved.');
		});

		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT}`);
});
