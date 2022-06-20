export type TEats = 'yes' | 'no' | 'maybe' | '?'

export interface IFood {
  name: string,
  eats: TEats,
  imgUrl: string,
  comment?: string
  exploring?: boolean
}

const foods: IFood[] = [
  {
    name: 'Ruccola',
    eats: 'yes',
    imgUrl: '',
  },
  {
    name: 'Sparris',
    eats: 'yes',
    imgUrl: '',
  },
  {
    name: 'Tomat',
    eats: 'maybe',
    imgUrl: '',
    comment: 'Väl tillagade i rätt',
    exploring: true
  },
  {
    name: 'Rödlök',
    eats: 'maybe',
    imgUrl: '',
    comment: '',
    exploring: true
  },
  {
    name: 'Musslor',
    eats: '?',
    imgUrl: '',
    comment: '',
    exploring: false
  },
  {
    name: 'Banan',
    eats: 'no',
    imgUrl: '',
    comment: 'Aldrig',
  },

]

export default foods