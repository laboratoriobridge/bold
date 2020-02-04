import { Observable } from '../Observable'

describe('Observable', () => {
  describe('subscribe', () => {
    it('should add a subscriber to the listener', () => {
      const ob = new Observable<string>()
      const listener = () => null
      expect(ob['listeners']).toEqual([])
      ob.subscribe(listener)
      expect(ob['listeners']).toEqual([listener])
    })
    it('return an unsubscribe function that removes the subscriber', () => {
      const ob = new Observable<string>()
      const listener1 = () => null
      const listener2 = () => null
      const listener3 = () => null
      ob.subscribe(listener1)
      const unsubscribe2 = ob.subscribe(listener2)
      ob.subscribe(listener3)
      expect(ob['listeners']).toEqual([listener1, listener2, listener3])
      unsubscribe2()
      expect(ob['listeners']).toEqual([listener1, listener3])
    })
  })
  describe('notify', () => {
    it('should notify all listeners with the provided value', () => {
      const ob = new Observable<string>()
      const listener1 = jest.fn()
      const listener2 = jest.fn()
      ob.subscribe(listener1)
      ob.subscribe(listener2)

      expect(listener1).not.toHaveBeenCalled()
      expect(listener2).not.toHaveBeenCalled()

      ob.notify('foo')
      expect(listener1).toHaveBeenCalledWith('foo')
      expect(listener2).toHaveBeenCalledWith('foo')
    })
  })
})
