import type { PropType } from 'vue';
import { defineComponent, TransitionGroup } from 'vue';
import { getPrefixCls } from '../_utils/global-config';
import { isFunction } from '../_utils/is';
import Message from './message.vue';
import { MESSAGE_POSITION, MessageItem, MessagePosition } from './interface';

export default defineComponent({
  name: 'MessageList',
  props: {
    messages: {
      type: Array as PropType<MessageItem[]>,
      default: () => [],
    },
    position: {
      type: String as PropType<MessagePosition>,
      default: 'top',
      validator: (value: any) => {
        return MESSAGE_POSITION.includes(value);
      },
    },
  },
  emits: ['close'],
  setup(props, context) {
    const prefixCls = getPrefixCls('message-list');

    return () => (
      <TransitionGroup
        class={[prefixCls, `${prefixCls}-${props.position}`]}
        name="fade-message"
        tag="ul"
      >
        {props.messages.map((item) => {
          const slots = {
            default: () =>
              isFunction(item.content) ? item.content() : item.content,
            icon: () => (isFunction(item.icon) ? item.icon() : item.icon),
          };
          return (
            <Message
              key={item.id}
              type={item.type}
              duration={item.duration}
              closable={item.closable}
              resetOnUpdate={item.resetOnUpdate}
              v-slots={slots}
              onClose={() => context.emit('close', item.id)}
            />
          );
        })}
      </TransitionGroup>
    );
  },
});
