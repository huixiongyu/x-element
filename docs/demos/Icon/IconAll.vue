<script setup lang="ts">
import { ref } from 'vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from '@com/Icon/Icon.vue'
import { createMessage } from '@com/Message/method'
import useCopy from '@/hooks/useCopy'
// library.add(fas)

const DATA_LIST = [
  'envelope',
  'file',
  'car',
  'droplet',
  'truck',
  'wifi',
  'person',
  'person-dress',
  'snowflake',
  'shop',
  'landmark',
  'shirt',
  'anchor',
  'stethoscope',
  'truck-front',
  'mountain-sun',
  'building',
  'flag',
  'school',
  'laptop',
  'hotel',
  'walkie-talkie',
  'shower',
  'ship',
  'arrow-up-right-from-square',
  'seedling',
  'hammer',
  'file-pdf',
  'hospital',
  'virus',
  'radio',
  'plug',
  'road',
  'church',
  'soap',
  'wind',
  'baby',
  'people-arrows',
  'headset',
  'gopuram',
  'xmarks-lines',
  'worm',
  'wheelchair-move',
  'wheat-awn-circle-exclamation',
  'wheat-awn',
  'volcano',
  'virus-covid',
  'vihara',
  'vial-virus',
  'vial-circle-check',
  'users-viewfinder',
  'users-rectangle',
  'users-rays',
  'users-line',
  'users-between-lines',
  'user-injured',
  'user-doctor',
  'truck-plane',
  'truck-medical',
  'truck-field-un',
  'truck-field',
  'truck-droplet',
  'truck-arrow-right',
  'trowel-bricks',
  'trowel',
  'tree-city',
  'trash-can',
  'train-subway',
  'tower-observation',
  'tower-cell',
  'tower-broadcast',
  'tornado',
  'toilets-portable',
  'toilet-portable',
  'toilet',
  'tents',
  'tent-arrows-down',
  'tent-arrow-turn-left',
  'tent-arrow-left-right',
  'tent-arrow-down-to-line',
  'tent',
  'temperature-arrow-up',
  'temperature-arrow-down',
  'tarp-droplet',
  'tarp',
  'syringe',
  'sun-plant-wilt',
  'suitcase-medical',
  'staff-snake',
  'square-virus',
  'square-person-confined',
  'square-nfi',
  'skull-crossbones',
  'shop-lock',
  'shield-heart',
  'shield-dog',
  'shield-cat',
  'sheet-plastic',
  'school-lock',
  'school-flag',
  'school-circle-xmark',
  'school-circle-exclamation',
  'school-circle-check',
  'scale-balanced',
  'satellite-dish',
  'sailboat',
  'sack-xmark',
  'sack-dollar',
  'rug',
  'road-spikes',
  'road-lock',
  'road-circle-xmark',
  'road-circle-exclamation',
  'road-circle-check',
  'road-bridge',
  'road-barrier',
  'ranking-star',
  'radiation',
  'pump-soap',
  'plug-circle-xmark',
  'plug-circle-plus',
  'plug-circle-minus',
  'plug-circle-exclamation',
  'plug-circle-check',
  'plug-circle-bolt',
  'plate-wheat',
  'plant-wilt',
  'plane-up',
  'plane-lock',
  'plane-circle-xmark',
  'plane-circle-exclamation',
  'plane-circle-check',
  'pills',
  'person-walking-luggage',
  'person-walking-dashed-line-arrow-right',
  'person-walking-arrow-right',
  'person-walking-arrow-loop-left',
  'person-walking',
  'person-through-window',
  'person-shelter',
  'person-rifle',
  'person-rays',
  'person-pregnant',
  'person-military-to-person',
  'person-military-rifle',
  'person-military-pointing',
  'person-harassing',
  'person-half-dress',
  'person-falling-burst',
  'person-falling',
  'person-drowning',
  'person-dress-burst',
  'person-digging',
  'person-circle-xmark',
  'person-circle-question',
  'person-circle-plus',
  'person-circle-minus',
  'person-circle-exclamation',
  'person-circle-check',
  'person-chalkboard',
  'person-cane',
  'person-burst',
  'person-breastfeeding',
  'person-arrow-up-from-line',
  'person-arrow-down-to-line',
  'people-roof',
  'people-robbery',
  'people-pulling',
  'people-line',
  'people-group',
  'parachute-box',
  'oil-well',
  'mountain-city',
  'mound',
  'mosquito-net',
  'mosquito',
  'mosque',
  'money-bills',
  'money-bill-wheat',
  'money-bill-trend-up',
  'money-bill-transfer',
  'mobile-screen',
  'mobile-retro',
  'microscope',
  'mattress-pillow',
  'mask-ventilator',
  'mask-face',
  'mars-and-venus-burst',
  'mars-and-venus',
  'magnifying-glass-chart',
  'magnifying-glass-arrow-right',
  'lungs',
  'locust',
  'location-pin-lock',
  'lines-leaning',
  'life-ring',
  'laptop-file',
  'landmark-flag',
  'landmark-dome',
  'land-mine-on',
  'kitchen-set',
  'jug-detergent',
  'jet-fighter-up',
  'jar-wheat',
  'jar',
  'id-card',
  'hurricane',
  'house-tsunami',
  'house-signal',
  'house-medical-flag',
  'house-medical-circle-xmark',
  'house-medical-circle-exclamation',
  'house-medical-circle-check',
  'house-medical',
  'house-lock',
  'house-flood-water-circle-arrow-right',
  'house-flood-water',
  'house-flag',
  'house-fire',
  'house-circle-xmark',
  'house-circle-exclamation',
  'house-circle-check',
  'house-chimney-crack',
  'house-chimney',
  'hill-rockslide',
  'hill-avalanche',
  'helmet-un',
  'helicopter-symbol',
  'helicopter',
  'heart-circle-xmark',
  'heart-circle-plus',
  'heart-circle-minus',
  'heart-circle-exclamation',
  'heart-circle-check',
  'heart-circle-bolt',
  'handshake-simple',
  'hands-holding-circle',
  'hands-holding-child',
  'hands-bubbles',
  'hands-bound',
  'handcuffs',
  'hand-holding-hand',
  'group-arrows-rotate',
  'glass-water-droplet',
  'glass-water',
  'gas-pump',
  'flask-vial',
  'fish-fins',
  'fire-flame-simple',
  'fire-burner',
  'file-shield',
  'file-pen',
  'file-csv',
  'file-circle-xmark',
  'file-circle-question',
  'file-circle-plus',
  'file-circle-minus',
  'file-circle-exclamation',
  'file-circle-check',
  'ferry',
  'fax',
  'faucet-drip',
  'explosion',
  'envelope-circle-check',
  'display',
  'cubes-stacked',
  'cow',
  'computer',
  'cloud-showers-water',
  'cloud-showers-heavy',
  'cloud-bolt',
  'clipboard-user',
  'clipboard-question',
  'circle-nodes',
  'circle-h',
  'children',
  'child-combatant',
  'car-tunnel',
  'car-on',
  'bus',
  'burst',
  'building-wheat',
  'building-user',
  'building-un',
  'building-shield',
  'building-ngo',
  'building-lock',
  'building-flag',
  'building-columns',
  'building-circle-xmark',
  'building-circle-exclamation',
  'building-circle-check',
  'building-circle-arrow-right',
  'bugs',
  'bucket',
  'bridge-water',
  'bridge-lock',
  'bridge-circle-xmark',
  'bridge-circle-exclamation',
  'bridge-circle-check',
  'bridge',
  'boxes-packing',
  'bowl-rice',
  'bowl-food',
  'bottle-water',
  'bottle-droplet',
  'bore-hole',
  'book-bookmark',
  'biohazard',
  'bed',
  'ban',
  'bacterium',
  'arrows-up-to-line',
  'arrows-turn-to-dots',
  'arrows-turn-right',
  'arrows-to-eye',
  'arrows-to-dot',
  'arrows-to-circle',
  'arrows-split-up-and-left',
  'arrows-spin',
  'arrows-left-right-to-line',
  'arrows-down-to-people',
  'arrows-down-to-line',
  'arrow-up-right-dots',
  'arrow-up-from-water-pump',
  'arrow-up-from-ground-water',
  'arrow-right-to-city',
  'arrow-down-up-lock',
  'arrow-down-up-across-line',
  'anchor-lock',
  'anchor-circle-xmark',
  'anchor-circle-exclamation',
  'anchor-circle-check'
]

// const toLine = (value: string) => {
//   return value
//     .replace(/([A-Z])/g, '-$1')
//     .replace(/-/, '')
//     .toLocaleLowerCase()
// }
// const tempIcons = Object.keys(fas).slice(0, 201)
// const iconList = ref(
//   tempIcons.map((item) => {
//     const t = item.slice(2)
//     console.log(toLine(t))
//     return toLine(t)
//   })
// )
const iconList = ref(DATA_LIST)
const copyIcon = (icon: string) => {
  const iconText = `<Icon icon="${icon}" />`
  useCopy(iconText)
  createMessage({ message: `${iconText} 已复制`, type: 'success' })
}
</script>
<template>
  <div class="container">
    <div class="icon-item" v-for="item in iconList" :key="item" @click="() => copyIcon(item)">
      <Icon class="icon-logo" :icon="item" />
      <div class="icon-name">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.icon-logo {
  font-size: 26px;
}
.icon-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
  height: 120px;
  box-sizing: border-box;
  border: 1px solid var(--hx-border-color);
  overflow: hidden;
}
.icon-name {
  height: 20px;
  font-size: 12px;
  word-wrap: break-word;
}
</style>
