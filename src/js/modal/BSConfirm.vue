<template>
  <transition name="ci">
    <div v-bind:class="[
        ns + 'modal',
        ns + 'modal-confirm'
      ]">
      <div v-bind:class="ns + 'modal-dialog'">
        <div v-bind:class="ns + 'modal-content'">
          <div v-bind:class="ns + 'modal-header'" v-if="title"><h4>{{title}}</h4></div>
          <div v-bind:class="ns + 'modal-body'" v-if="content">{{content}}</div>
          <div v-bind:class="ns + 'modal-body'" v-else><slot>Are you sure?</slot></div>
          <div v-bind:class="ns + 'modal-footer'">
            <ci-button type="link" style="default" v-on:click="cancel">{{cancelText}}</ci-button>
            <ci-button type="link" style="primary" v-on:click="ok">{{okText}}</ci-button>
          </div>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script>
import config from './_confirm.js'

config.props.ns = {
  type: String,
  default: ''
}

export default config
</script>
