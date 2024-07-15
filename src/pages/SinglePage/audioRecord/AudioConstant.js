const AudioConstant = {}

AudioConstant.UPDATE_DATA = 'update_data'

AudioConstant.sampleRateOptions =[
  { text: '8000', value: 8000 },
  { text: '16000', value: 16000 },
  { text: '22050', value: 22050 },
  { text: '24000', value: 24000 },
  { text: '44100', value: 44100 },
  { text: '48000', value: 48000 },
]

AudioConstant. sampleBitOptions = [
  { text: '8', value: 8 },
  { text: '16', value: 16 },
]

AudioConstant.numChannelOptions = [
  { text: '单', value: 1 },
  { text: '双', value: 2 },
]

export default AudioConstant
