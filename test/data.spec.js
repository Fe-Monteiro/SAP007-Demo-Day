import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { filter, ordination, average } from '../src/data.js';

const characters  = [
  {
      "id": 1,
      "name": "Abadango Cluster Princess",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Female",
  },
  {
      "id": 2,
      "name": "Mechanical Morty",
      "status": "Dead",
      "species": "Robot",
      "type": "",
      "gender": "Male",
  },
  {
      "id": 3,
      "name": "Kyle",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Miniverse inhabitant",
      "gender": "Male",
  },
  {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
  }]


const characterNames  = [
  {"name": "Abadango Cluster Princess"},
  {"name": "Mechanical Morty"},
  {"name": "Kyle"},
  {"name": "Beth Smith"},
]


describe('function filter()', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('filter by human species', () => {
    const specieHuman = 'Human'
    const expected = filter(characters , specieHuman)
    expect (expected.length).toEqual(1)
    expect(expected[0].species).toEqual('Human');
  });
});

  it('filter by live status ', () => {
    const statusAlive = 'Alive'
    const expected = filter(characters , statusAlive)
    expect (expected.length).toEqual(2)
    expect(expected[0].status).toEqual('Alive');
    expect(expected[1].status).toEqual('Alive');
  });

describe('function ordination()', () => {
  it('is a function', () => {
    expect(typeof ordination).toBe('function');
  });

    it('ordering of A-Z', () => {
    expect(ordination(characterNames , "AZ")).toStrictEqual([characterNames [0], characterNames [3], characterNames [2], characterNames [1]]);
  });

    it('ordering of Z-A', () => {
      expect(ordination(characterNames , "ZA")).toStrictEqual([characterNames [1], characterNames [2], characterNames [3], characterNames [0]]);
    });
  });


  describe('function average()', () => {
    it('is a function', () => {
      expect(typeof average).toBe('function');
    });

    it('percentage of characters in the human category - 25%', () => {
    const expected = average(characters .length, 1)
      expect (expected).toEqual(25);
    });

  it('percentage of characters in the category dead status category - 50%', () => {
    const expected = average(characters .length, 2)
      expect (expected).toEqual(50);
    });
  });
