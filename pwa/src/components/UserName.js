import { Buffer } from "buffer"
import { uniqueNamesGenerator, colors, names } from 'unique-names-generator';
// other dictionaries available are: adjectives, animals, countries, languages, starWars
// new dictionaries can be made by declaring text arrays, including an existing one expands it

export default function UserName({seed}) {

    const processedSeed = Buffer.from(seed).readUInt32BE(0);

    const userName = uniqueNamesGenerator({
        dictionaries: [colors, names],
        length: 2,
        style: 'capital',
        separator: ' ',
        seed: processedSeed
      });

    return (
        userName
    )
}