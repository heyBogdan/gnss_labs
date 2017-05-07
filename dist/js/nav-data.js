string1Params =[
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'-',
            description:'резерв, предусмотренный на случай изменений и дополнений в структуре навигационного сообщения.'
        },    
        digitsNum: 2,
        lowDigitPrice:'-',
        range: '-',
        unit: '-',
        value:0,
    },
    {
        name:{
            value:'P1',
            description:'признак смены оперативной информации; признак сообщает величину интервала времени между значениями tb (мин) в данном и предыдущем кадрах. 00 - 0 мин, 01 - 30 мин, 10 - 45 мин, 11 - 60 мин'
        },
        digitsNum: 2,
        lowDigitPrice:'*',
        range: '*',
        unit: '*',
        value:null,
        descritption:''
    },
    {
        name:{
            value:'t<sub>k</sub>',
            description:'Время начала кадра внутри текущих суток, исчисляемое в шкале бортового времени. Количество целых часов, прошедших с начала текущих суток'
        },
        digitsNum: 5,
        lowDigitPrice:1,
        range: '0..23',
        unit: 'час',
        value:null
    },
    {
        name:{
            value:'t<sub>k</sub>',
            description:'Время начала кадра внутри текущих суток, исчисляемое в шкале бортового времени. Количество целых минут'
        },
        digitsNum: 6,
        lowDigitPrice:1,
        range: '0..59',
        unit: 'мин',
        value:null
    },
    {
        name:{
            value:'t<sub>k</sub>',
            description:'Время начала кадра внутри текущих суток, исчисляемое в шкале бортового времени. Количество 30-секундных интервалов, прошедших с начала текущей минуты'
        },
        digitsNum: 1,
        lowDigitPrice:30,
        range: '0;30',
        unit: 'с',
        value:null
    },
    {
        name:{
            value:"x<sub>n</sub>'(t<sub>b</sub>)",
            description:'составляющая вектора скорости n-го НКА в системе координат ПЗ-90.02 на момент времени tb'
        },   
        digitsNum: 24,
        lowDigitPrice:'2<sup>-20</sup>',
        range: '±4.3',
        unit: 'км/с',
        value:null
    },
    {
        name:{
            value:"x<sub>n</sub>''(t<sub>b</sub>)",
            description:'составляющая ускорения n-го НКА в системе координат ПЗ-90.02 на момент времени t b, обусловленные действием Луны и Солнца'
        },
        digitsNum: 5,
        lowDigitPrice:'2<sup>-30</sup>',
        range: '±6.2e-9',
        unit: 'км/с<sup>2</sup>',
        value:null
    },
    {
        name:{
            value:"x<sub>n</sub>(t<sub>b</sub>)",
            description:' координата n-го НКА в системе координат ПЗ-90.02 на момент времени t b; '
        },
        digitsNum: 27,
        lowDigitPrice:'2<sup>-11</sup>',
        range: '±2.7e4',
        unit: 'км',
        value:null
    }                                   
]

string2Params =[
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'B<sub>n</sub>',
            description:'признак недостоверности кадра n-го НКА. Навигационной аппаратурой потребителя анализируется только старший разряд этого слова, "1" в котором обозначает факт непригодности данного НКА для проведения сеансов измерений. Второй и третий разряды этого слова аппаратурой потребителя не анализируются;'
        },    
        digitsNum: 3,
        lowDigitPrice:1,
        range: '0..7',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'P2',
            description:'признак нечетности ("1") или четности ("0") числового значения слова tb (для интервалов 30 или 60 минут)'
        },    
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0;1',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'t<sub>b</sub>',
            description:'порядковый номер временного интервала внутри текущих суток по шкале системного времени ГЛОНАСС, к середине которого относится передаваемая в кадре оперативная информация. Длительность данного временного интервала и, следовательно, максимальное значение слова t b определяются значением слова P1'
        },    
        digitsNum: 7,
        lowDigitPrice:15,
        range: '15..1425',
        unit: 'мин',
        value:null
    },
    {
        name:{
            value:'-',
            description:'резерв, предусмотренный на случай изменений и дополнений в структуре навигационного сообщения.'
        },    
        digitsNum: 5,
        lowDigitPrice:'-',
        range: '-',
        unit: '-',
        value:0,
    },
    {
        name:{
            value:"y<sub>n</sub>'(t<sub>b</sub>)",
            description:'составляющая вектора скорости n-го НКА в системе координат ПЗ-90.02 на момент времени tb'
        },   
        digitsNum: 24,
        lowDigitPrice:'2<sup>-20</sup>',
        range: '±4.3',
        unit: 'км/с',
        value:null
    },
    {
        name:{
            value:"y<sub>n</sub>''(t<sub>b</sub>)",
            description:'составляющая ускорения n-го НКА в системе координат ПЗ-90.02 на момент времени t b, обусловленные действием Луны и Солнца'
        },
        digitsNum: 5,
        lowDigitPrice:'2<sup>-30</sup>',
        range: '±6.2e-9',
        unit: 'км/с<sup>2</sup>',
        value:null
    },
    {
        name:{
            value:"y<sub>n</sub>(t<sub>b</sub>)",
            description:' координата n-го НКА в системе координат ПЗ-90.02 на момент времени t b; '
        },
        digitsNum: 27,
        lowDigitPrice:'2<sup>-11</sup>',
        range: '±2.7e4',
        unit: 'км',
        value:null
    }                                   
]

string3Params =[
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'P3',
            description:'признак, состояние "1" которого означает, что в данном кадре передается альманах для 5-ти НКА системы, а состояние "0" означает, что в данном кадре передается альманах для 4-х НКА'
        },    
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0;1',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'γ<sub>n</sub>(t<sub>b</sub>)',
            description:' относительное отклонение прогнозируемого значения несущей частоты излучаемого навигационного радиосигнала n-го НКА от номинального значения на момент времени tb. γn(tb) = (fn(tb) - fнn )/fнn , где fn(tb) - прогнозируемое значение несущей частоты излучаемого навигационного радиосигнала n-го НКА с учетом гравитационного и релятивистского эффектов на момент времени tb;  fнn - номинальное значение несущей частоты навигационного радиосигнала n-го НКА.'
        },
        digitsNum: 11,
        lowDigitPrice:'2<sup>-40</sup>',
        range: '±2<sup>-30</sup>',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'-',
            description:'резерв, предусмотренный на случай изменений и дополнений в структуре навигационного сообщения.'
        },    
        digitsNum: 1,
        lowDigitPrice:'-',
        range: '-',
        unit: '-',
        value:0,
    },
    {
        name:{
            value:'P',
            description:' признак режима работы НКА по ЧВИ (1)..Значения признака следующие:  00 – ретрансляция параметра τс, ретрансляция параметра τGPS;  01 - ретрансляция параметра τс, размножение параметра τGPS на борту НКА;  10 - размножение параметра τс на борту НКА, ретрансляция параметра τGPS;  11 - размножение параметра τс на борту НКА, размножение параметра τGPS на борту НКА.'
        },
        digitsNum: 2,
        lowDigitPrice:1,
        range: '00,01,10,11',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'l<sub>n</sub>',
            description:' признак недостоверности кадра n-го НКА; ln = 0 свидетельствует о пригодности НКА для навигации;  ln = 1 означает факт непригодности данного НКА для навигации.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0;1',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:"z<sub>n</sub>'(t<sub>b</sub>)",
            description:'составляющая вектора скорости n-го НКА в системе координат ПЗ-90.02 на момент времени tb'
        },   
        digitsNum: 24,
        lowDigitPrice:'2<sup>-20</sup>',
        range: '±4.3',
        unit: 'км/с',
        value:null
    },
    {
        name:{
            value:"z<sub>n</sub>''(t<sub>b</sub>)",
            description:'составляющая ускорения n-го НКА в системе координат ПЗ-90.02 на момент времени t b, обусловленные действием Луны и Солнца'
        },
        digitsNum: 5,
        lowDigitPrice:'2<sup>-30</sup>',
        range: '±6.2e-9',
        unit: 'км/с<sup>2</sup>',
        value:null
    },
    {
        name:{
            value:"z<sub>n</sub>(t<sub>b</sub>)",
            description:' координата n-го НКА в системе координат ПЗ-90.02 на момент времени t b; '
        },
        digitsNum: 27,
        lowDigitPrice:'2<sup>-11</sup>',
        range: '±2.7e4',
        unit: 'км',
        value:null
    }                                  
]

string4Params =[
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'τ<sub>n</sub>(t<sub>b</sub>)',
            description:'сдвиг шкалы времени n-го НКА t n относительно шкалы времени системы ГЛОНАСС tc, равный смещению по фазе ПСПД излучаемого навигационного радиосигнала n-го НКА относительно системного опорного сигнала на момент времени tb, выраженный в единицах времени     τn (t b) = tc (tb ) - tn (tb )'
        },
        digitsNum: 22,
        lowDigitPrice:'2<sup>-30</sup>',
        range: '±2<sup>-9</sup>',
        unit: 'с',
        value:null
    },
    {
        name:{
            value:'Δτ<sub>n</sub>(t<sub>b</sub>)',
            description:' смещение излучаемого навигационного радиосигнала поддиапазона L2 относительно навигационного радиосигнала поддиапазона L1 для n-го НКА.     Δτn = tf2 – tf1, где tf1, tf2 – аппаратурные задержки в соответствующих поддиапазонах, выраженные в единицах времени;'
        },
        digitsNum: 5,
        lowDigitPrice:'2<sup>-30</sup>',
        range: '±13.97e-9',
        unit: 'с',
        value:null
    },
    {
        name:{
            value:'E<sub>n</sub>',
            description:'характеризует "возраст" оперативной информации, то есть интервал времени, прошедший от момента расчета (закладки) оперативной информации до момента времени tb для n-го НКА. Слово En формируется на борту НКА. '
        },
        digitsNum: 5,
        lowDigitPrice:1,
        range: '0..31',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'-',
            description:'резерв, предусмотренный на случай изменений и дополнений в структуре навигационного сообщения.'
        },    
        digitsNum: 14,
        lowDigitPrice:'-',
        range: '-',
        unit: '-',
        value:0,
    },
    {
        name:{
            value:'P4',
            description:' признак того, что на текущем интервале времени tb средствами ПКУ на НКА заложена (1) или не заложена (0) обновленная эфемеридная или частотно-временная информация.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0;1',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:"F<sub>T</sub>",
            description:'фактор точности измерений, характеризующий в виде эквивалентной ошибки прогнозируемую ошибку измерения псевдодальности, обусловленную набором данных (эфемеридная и частотно-временная информация), излучаемых в навигационном сообщении на момент времени tb. 0 - 1 м, 1 - 2 м, 2 - 2.5 м, 3 - 4 м, 4 - 5 м, 5 - 7 м, 6 - 10 м, 7 - 12 м, 8 - 14 м, 9 - 16 м, 10 - 32 м, 11 - 64 м, 12 - 128 м, 13 - 256 м, 14 - 512 м, 15 - не импользуется '
        },
        digitsNum: 4,
        lowDigitPrice:'*',
        range: '*',
        unit: '*',
        value:null
    },
    {
        name:{
            value:'-',
            description:'резерв, предусмотренный на случай изменений и дополнений в структуре навигационного сообщения.'
        },    
        digitsNum: 3,
        lowDigitPrice:'-',
        range: '-',
        unit: '-',
        value:0,
    },
    {
        name:{
            value:"N<sub>T</sub>",
            description:'текущая дата, календарный номер суток внутри четырехлетнего интервала, начиная с 1-го января високосного года'
        },
        digitsNum: 11,
        lowDigitPrice:1,
        range: '0..1461',
        unit: 'сутки',
        value:null
    },
    {
        name:{
            value:"n",
            description:'номер НКА, излучающего данный навигационный сигнал и соответствующий его рабочей точке внутри орбитальной группировки ГЛОНАСС'
        },
        digitsNum: 5,
        lowDigitPrice:1,
        range: '0..31',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:"M",
            description:' модификация НКА, излучающего данный навигационный сигнал. Значение "00" означает НКА «Глонасс», "01" – НКА «Глонасс-М»'
        },
        digitsNum: 2,
        lowDigitPrice:1,
        range: '0..3',
        unit: 'безразмерная',
        value:null
    }                                            
]

string5Params =[
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'N<sup>A</sup>',
            description:'календарный номер суток внутри четырехлетнего периода, начиная с високосного года, к которым относятся поправка τc и данные альманаха системы (альманах орбит и альманах фаз);'
        },
        digitsNum: 11,
        lowDigitPrice:1,
        range: '0..1461',
        unit: 'сутки',
        value:null
    },
    {
        name:{
            value:'τ<sub>с</sub>',
            description:'поправка к шкале времени системы ГЛОНАСС относительно UTC(SU). Поправка τc дана на начало суток с номером NA ; τc  = TUTC(SU) + 03 час 00 мин - TГЛ'
        },
        digitsNum: 32,
        lowDigitPrice:'2<sup>-31</sup>',
        range: '±1',
        unit: 'с',
        value:null
    },
    {
        name:{
            value:'-',
            description:'резерв, предусмотренный на случай изменений и дополнений в структуре навигационного сообщения.'
        },    
        digitsNum: 1,
        lowDigitPrice:'-',
        range: '-',
        unit: '-',
        value:0,
    },
    {
        name:{
            value:'N<sub>4</sub>',
            description:'номер четырехлетнего периода, первый год первого четырехлетия  соответствует 1996 году'
        },    
        digitsNum: 5,
        lowDigitPrice:1,
        range: '1-31',
        unit: '4-х летний интервал',
        value:null
    },
    {
        name:{
            value:'τ<sub>GPS</sub>',
            description:'Слово τGPS – поправка на расхождение системных шкал времени GPS(TGPS) и ГЛОНАСС (ТГЛ) в соответствии со следующим выражением:     T GPS – TГЛ = ΔΤ + τGPS , где ΔΤ − целая часть, а τGPS - дробная часть расхождения шкал времени, выраженного в секундах. Примечание: Целая часть расхождения ΔΤ определяется потребителем из навигационного сообщения системы GPS;'
        },
        digitsNum: 22,
        lowDigitPrice:'2<sup>-30</sup>',
        range: '±1.9e-3',
        unit: 'c',
        value:null
    },
    {
        name:{
            value:'l<sub>n</sub>',
            description:' признак недостоверности кадра n-го НКА; ln = 0 свидетельствует о пригодности НКА для навигации;  ln = 1 означает факт непригодности данного НКА для навигации.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0;1',
        unit: 'безразмерная',
        value:null
    }                                
]

string6Params = [
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'C<sup>n</sup>',
            description:'обобщенный признак состояния НКА с номером n на момент закладки неоперативной информации (альманаха орбит и фаз). Значение признака Сn = 0 указывает на непригодность НКА для использования в сеансах навигационных определений, а значение признака Сn = 1 - на пригодность НКА.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..1',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'M<sub>n</sub><sup>A</sup>',
            description:' признак модификации n-го НКА;  "00" -  «Глонасс», "01" -  «Глонасс-М»; '
        },
        digitsNum: 2,
        lowDigitPrice:1,
        range: '0..3',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'n<sup>A</sup>',
            description:'Слово nA - условный номер НКА в системе, который соответствует номеру занимаемой НКА рабочей точки;'
        },
        digitsNum: 5,
        lowDigitPrice:1,
        range: '1..24',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'τ<sub>n</sub><sup>A</sup>',
            description:'грубое значение сдвига шкалы времени НКА с номером nA относительно шкалы времени системы на момент времени t λn A, равное смещению ПСПД излучаемого навигационного радиосигнала относительно номинального положения, выраженному в единицах времени; '
        },
        digitsNum: 10,
        lowDigitPrice:'2<sup>-18</sup>',
        range: '±1.9e-3',
        unit: 'c',
        value:null
    },
    {
        name:{
            value:'λ<sub>n</sub><sup>A</sup>',
            description:'долгота в системе координат ПЗ-90.02 первого внутри суток с номером NA восходящего узла орбиты НКА с номером nA'
        },
        digitsNum: 21,
        lowDigitPrice:'2<sup>-20</sup>',
        range: '±1',
        unit: 'полуцикл',
        value:null
    },
    {
        name:{
            value:'Δi<sub>n</sub><sup>A</sup>',
            description:'поправка к среднему значению наклонения орбиты для НКА с номером n A на момент t λn A (среднее значение наклонения орбиты принято равным 63°); '
        },
        digitsNum: 18,
        lowDigitPrice:'2<sup>-20</sup>',
        range: '±0.067',
        unit: 'полуцикл',
        value:null
    },
    {
        name:{
            value:'ε<sub>n</sub><sup>A</sup>',
            description:'эксцентриситет орбиты НКА с номером nA на момент времени tλnA'
        },    
        digitsNum: 15,
        lowDigitPrice:'2<sup>-20</sup>',
        range: '0..0.03',
        unit: 'безразмерная',
        value:null
    }                               
]

string7Params = [
    {
        name:{
            value:'hs',
            description:'Первый символ цифровой информации в каждой строке всегда "0". Он является "холостым" и дополняет укороченную ПСП МВ предыдущей строки до полной (не укороченной) ПС последовательности.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:0,
    },
    {
        name:{
            value:'m',
            description:'номер строки в навигационном кадре'
        },    
        digitsNum: 4,
        lowDigitPrice:1,
        range: '0..15',
        unit: 'безразмерная',
        value:1,
    },
    {
        name:{
            value:'ω<sub>n</sub><sup>A</sup>',
            description:'аргумент перигея орбиты НКА с номером n^A на момент времени tλn^A'
        },    
        digitsNum: 16,
        lowDigitPrice:'2<sup>-15</sup>',
        range: '±1',
        unit: 'полуцикл',
        value:null
    },
    {
        name:{
            value:'t<sub>λn</sub><sup>A</sup>',
            description:'время прохождения первого внутри суток с номером N^A восходящего узла орбиты НКА с номером n^A'
        },
        digitsNum: 21,
        lowDigitPrice:'2<sup>-5</sup>',
        range: '0..44100',
        unit: 'c',
        value:null
    },
    {
        name:{
            value:'ΔT<sub>n</sub><sup>A</sup>',
            description:'поправка к среднему значению драконического периода обращения НКА с номером n A на момент времени tλn^A (среднее значение драконического периода обращения НКА принято равным 43200 с);'
        },    
        digitsNum: 22,
        lowDigitPrice:'2<sup>-9</sup>',
        range: '±3.6e3',
        unit: 'c/виток',
        value:null
    },
    {
        name:{
            value:"ΔT'<sub>n</sub><sup>A</sup>",
            description:'скорость изменения драконического периода обращения НКА с номером nA'
        },
        digitsNum: 7,
        lowDigitPrice:'2<sup>-14</sup>',
        range: '±2<sup>-8</sup>',
        unit: 'c/виток<sup>2<sup>',
        value:null
    },
    {
        name:{
            value:'H<sub>n</sub><sup>A</sup>',
            description:'номер несущей частоты навигационного радиосигнала, излучаемого НКА с номером nA'
        },    
        digitsNum: 5,
        lowDigitPrice:'1',
        range: '0..31',
        unit: 'безразмерная',
        value:null
    },
    {
        name:{
            value:'l<sub>n</sub>',
            description:' признак недостоверности кадра n-го НКА; ln = 0 свидетельствует о пригодности НКА для навигации;  ln = 1 означает факт непригодности данного НКА для навигации.'
        },
        digitsNum: 1,
        lowDigitPrice:1,
        range: '0;1',
        unit: 'безразмерная',
        value:null
    }                                   
]

function SuperFrame(frameNum){
    this.frameNum = frameNum;
}

function Frame(stringNum){
    this.stringNum = stringNum;
    this.strings = [];
}
function NavString(parentName){
    this.parentName = parentName;
}    

var superFrame = new SuperFrame(5);
var frames = [];
for(var i = 0; i < superFrame.frameNum ; i++){
    frames.push(new Frame(15));
    frames[i].name = "frame" + i;
    for(var j = 0; j < frames[i].stringNum ; j++){
        frames[i].strings.push(new NavString(frames[i].name));
    }
}

function makeList(superFrame,frames){
    var superFrameList = document.createElement('ul');
    superFrameList.classList.add('superframe-list')

    frames.forEach(function(frame,frameNum){
        var frameElem = document.createElement('li');
        frameElem.classList.add('frame');
        frameElem.setAttribute('data-frame-id',frameNum + 1);
        frameElem.onclick = selectFrame;
        frameElem.innerHTML = 'Кадр № ' + (frameNum + 1);
        var stringList = document.createElement('ul');
        stringList.classList.add('nav-string-list');
        frameElem.appendChild(stringList);

        frame.strings.forEach(function(string, stringNum){
            var stringElem = document.createElement('li')
            stringElem.classList.add('nav-string');
            stringElem.onclick = selectNavString;
            stringElem.setAttribute('data-string-id',stringNum + 1)
            if(stringNum < 4){
                stringElem.innerHTML = 'Строка №' + (stringNum + 1) + ' Опер. инфо (излучающий НКА)';
            }else{
                if(stringNum > 4){
                    var almanNKA = Math.ceil((frameNum*10 + (stringNum - 4))/2);

                    stringElem.innerHTML = 'Строка №' + (stringNum + 1) + ' Неопер. инфо (Альманах, спутник №' + almanNKA + ')';
                    if(almanNKA == 25) stringElem.innerHTML  = 'Строка №' + (stringNum + 1) + ' Неопер. инфо';
                }else{
                    
                    stringElem.innerHTML = 'Строка №' + (stringNum + 1) + ' Неопер. инфо для всех НКА';
                }
            }
            stringList.appendChild(stringElem);
        })
        superFrameList.appendChild(frameElem);
    })
    superFrameWrapper.appendChild(superFrameList);
};

function makeTables(superFrame, frames){
    frames.forEach(function(frame,frameNum){
        frame.strings.forEach(function(string, stringNum){
            if(stringNum === 1){
                string.params = string1Params.slice();
                renderTable(string,stringNum,frameNum);
            }else if (stringNum === 2){
                string.params = string2Params.slice();
                renderTable(string,stringNum,frameNum);
            }else if (stringNum === 3){
                string.params = string3Params.slice();
                renderTable(string,stringNum,frameNum);
            }else if (stringNum === 4){
                string.params = string4Params.slice();
                renderTable(string,stringNum,frameNum);
            }else if (stringNum === 5){
                string.params = string5Params.slice();
                renderTable(string,stringNum,frameNum);
            }else if ((stringNum === 6) || (stringNum === 8) || (stringNum === 10) || (stringNum === 12) || (stringNum === 14)){
                string.params = string6Params.slice();
                renderTable(string,stringNum,frameNum);
            }else{
                string.params = string7Params.slice();
                renderTable(string,stringNum,frameNum);                
            }  
  
        })
    })
}
function renderTable(string, stringNum, frameNum){
    var tableBody = document.createElement('tbody');
    tableBody.setAttribute('data-frame-string-id', (frameNum + 1) + '-' + stringNum);
    string.params.forEach(function(param){
        var row = document.createElement('tr');
        for(key in param){
            var cell = document.createElement('td');
            if(key == 'name'){
                var cellParam = document.createElement('a');
                cellParam.setAttribute('data-toggle','tooltip');
                cellParam.setAttribute('data-placement','right');
                cellParam.setAttribute('data-original-title',param[key].description);
                cellParam.innerHTML = param[key].value;
                cell.appendChild(cellParam);
                row.appendChild(cell);
                continue;
            }
            if(key == 'value'){
               var cellValue = document.createElement('input');
               cellValue.type = 'number';
               cell.setAttribute('data-param-name', key)
               cell.appendChild(cellValue);
               row.appendChild(cell);
               continue;
            }
            cell.innerHTML = param[key]
            cell.setAttribute('data-param-name', key)
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    })
    document.querySelector('table').appendChild(tableBody);
}

var currentActiveFrame = null, prevActiveFrame = null;
var currentActiveNavString = null, prevActiveNavString = null;
var currentActiveTable = null, prevActiveTable = null;

function selectFrame(event){
    selectedFrame = event.currentTarget;
    if(selectedFrame === currentActiveFrame){
        selectedFrame.classList.toggle('active');
        currentActiveFrame = selectedFrame;
        if(currentActiveTable){
            currentActiveTable.style.display = 'none';
            currentActiveNavString.classList.remove('active');
        }    
        if(currentActiveFrame.classList.value.indexOf('active') == -1){
            showNavStrings(false)
        }else{
            showNavStrings(true)
        }
    }else{
        if(currentActiveFrame){//not first time
            showNavStrings(false);
            prevActiveFrame = currentActiveFrame;
            prevActiveFrame.classList.remove('active');
            if(currentActiveTable){
                currentActiveTable.style.display = 'none';
                currentActiveNavString.classList.remove('active');
            }    
        }
        currentActiveFrame = selectedFrame;
        currentActiveFrame.classList.add('active'); 
        showNavStrings(true);       
    }
};
function selectNavString(event){
    event.stopPropagation();
    selectedNavString = event.currentTarget;
    if(selectedNavString === currentActiveNavString){
        selectedNavString.classList.toggle('active');
        currentActiveNavString = selectedNavString;
        currentActiveTable =  document.querySelector('[data-frame-string-id="' + currentActiveFrame.getAttribute('data-frame-id') + '-' + currentActiveNavString.getAttribute('data-string-id') + '"]');
        currentActiveTable.style.display = currentActiveTable.style.display == 'none'?"table-row-group":'none';
    }else{
        if(currentActiveNavString){//not first time
            prevActiveNavString = currentActiveNavString;
            prevActiveNavString.classList.remove('active');
            prevActiveTable = document.querySelector('[data-frame-string-id="' + currentActiveFrame.getAttribute('data-frame-id') + '-' + prevActiveNavString.getAttribute('data-string-id') + '"]');
            prevActiveTable.style.display = "none";

        }
        currentActiveNavString = selectedNavString;
        currentActiveNavString.classList.add('active');
        currentActiveTable =  document.querySelector('[data-frame-string-id="' + currentActiveFrame.getAttribute('data-frame-id') + '-' + currentActiveNavString.getAttribute('data-string-id') + '"]');
        currentActiveTable.style.display = "table-row-group";
    }

}

function showNavStrings(option){
    currentActiveFrame.children[0].style.display = option?'block':'none';
}

makeList(superFrame,frames);
makeTables(superFrame,frames);

function translateToBinary(value, elem){
    var digitsNum = parseInt(elem.querySelector('[data-param-name="digitsNum"]').innerHTML);
    var result = value.toString(2);
    while(result.length < digitsNum){
        result = '0' + result ;
    } 
    return result;
}

generateStringBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('.working-area__string--decimial').innerHTML = '';
    document.querySelector('.working-area__string--binary').innerHTML = '';
    currentActiveTable.querySelectorAll('input').forEach(function(input){
        var stringPartElem = document.createElement('span');
        stringPartElem.style.padding = '0 3px'
        stringPartElem.innerHTML = input.value;
        document.querySelector('.working-area__string--decimial').appendChild(stringPartElem);
        var stringPartElem2 = document.createElement('span');
        stringPartElem2.style.padding = '0 3px'
        stringPartElem2.innerHTML = translateToBinary(parseInt(input.value), input.parentElement.parentElement );
        document.querySelector('.working-area__string--binary').appendChild(stringPartElem2);        
    });
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})