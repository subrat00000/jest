const {sum,myFunction, fetchData, fetchPromise} = require('./sum');
test('add 1+2 to equal 3', ()=>{
    expect(sum(1,2)).toBe(3);
})

test('object assignment', ()=>{
    const data = {one:1};
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})

test('null is falsy', ()=> {
    const n = null;
    expect(n).toBeFalsy();
})

test('one is truthy', ()=> {
    const n=1;
    expect(n).toBeTruthy();
})

test('throws on invalid input',()=> {
    expect(()=> {
        myFunction(3);
    }).toThrow();
})

test('the data is peanut butter',done=>{
    function callback(data){
        try{
            expect(data).toBe('peanut butter');
            done();
        } catch(err){
            done(err);
        }
    }
    fetchData(callback);
})

test('the data is peanut butter',()=>{
    return expect(fetchPromise()).resolves.toBe('peanut butter');
})

test('async the data is peanut butter', async()=>{
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
})

test('mock implementation of a basic function',()=>{
    const mock = jest.fn(x=>42+x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
})

test('spying on a method of an object',()=>{
    const video = {
        play(){
            return true;
        }
    };
    const spy = jest.spyOn(video, 'play');
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})