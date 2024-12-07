// Copyright 2021 Tosee Intelligence (hangzhoou) co.,ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#ifndef SENGO1_H_
#define SENGO1_H_

#include "lib/SentryFactory.h"

#define SENGO1_DEVICE_ID 0x06

class Sengo1 : public SentryFactory
{
public:
  Sengo1(uint32_t address = 0x60)
  {
    SentryFactory_Init(&factory, address, SENGO1_DEVICE_ID, product_vision_state_,
                       int(kVisionMaxType), int(kVisionQrCode));
  }
  virtual ~Sengo1() {}
  Sengo1(const Sengo1 &) = delete;
  Sengo1 &operator=(const Sengo1 &) = delete;

  enum sentry_vision_e
  {
    //% block="Color"
    kVisionColor = 1,
    //% block="Blob"
    kVisionBlob = 2,
    //% block="Ball"
    kVisionBall = 3,
    //% block="Line"
    kVisionLine = 4,
    //% block="Card"
    kVisionCard = 6,
    //% block="Body"
    kVisionBody = 7,
    //% block="Face"
    kVisionFace = 8,
    //% block="QrCode"
    kVisionQrCode = 9,
    //% blockHidden=true
    kVisionMaxType
  };
  /* Sentry card label */
  enum card_label_e
  {
    //% block="Forward"
    kCardForward = 1,
    //% block="Left"
    kCardLeft = 2,
    //% block="Right"
    kCardRight = 3,
    //% block="TurnAround"
    kCardTurnAround = 4,
    //% block="Park"
    kCardPark = 5
  };
  /* Sentry color label */
  enum color_label_e
  {
    //% block="Black"
    kColorBlack = 1,
    //% block="White"
    kColorWhite = 2,
    //% block="Red"
    kColorRed = 3,
    //% block="Green"
    kColorGreen = 4,
    //% block="Blue"
    kColorBlue = 5,
    //% block="Yellow"
    kColorYellow = 6
  };
  /* Sentry ball label */
  enum ball_label_e
  {
    //% block="Table Tennis"
    kBallTableTennis = 1,
    //% block="Tennis"
    kBallTennis = 2
  };

  /* SentryFactory label */
  enum
  {
    kUnknownLabel = 0
  };

  /**
   * @brief  Sentry begin with Serial.
   * @param  mode: uart or i2c.
   * @retval SENTRY_OK: begin success.
   *         other: protocol assert fail.
   */
  uint8_t begin(sentry_mode_e mode = kI2CMode,
                int set_default = 1)
  {
    return SentryFactory_Begin(&factory, mode, set_default);
  }
  /**
   * @brief  begin vision.
   * @param  vision_type: vision type.
   * @retval SENTRY_OK:  success
   *         other:  error
   */
  uint8_t VisionBegin(sentry_vision_e vision_type)
  {
    return SentryFactory_VisionBegin(&factory, (int)vision_type);
  }
  /**
   * @brief  end vision.
   * @param  vision_type: vision type.
   * @retval SENTRY_OK:  success
   *         other:  error
   */
  uint8_t VisionEnd(sentry_vision_e vision_type)
  {
    return SentryFactory_VisionEnd(&factory, (int)vision_type);
  }
  /**
   * @brief  Set max detect object number.
   * @param  vision_type: vision type.
   * @param  param:  vision parameter
   * @param  max_num:  max number
   * @retval SENTRY_OK:  success
   *         other:  error
   */
  uint8_t SetParamNum(sentry_vision_e vision_type, int max_num)
  {
    return SentryFactory_SetParamNum(&factory, (int)vision_type, max_num);
  }
  /**
   * @brief  write vision parameter.
   * @param  vision_type: vision type.
   * @param  param:  vision parameter
   * @param  param_id:  parameter id
   * @retval SENTRY_OK:  success
   *         other:  error
   */
  uint8_t SetParam(sentry_vision_e vision_type, sentry_object_t *param,
                   int param_id = 1)
  {
    return Sentry_Stream_SetParam(factory.stream, (int)vision_type, param, param_id);
  }

  uint8_t VisionSetMode(int vision_type, int mode)
  {
    return SentryFactory_VisionSetMode(&factory, vision_type, mode);
  }

  /**
   * @brief  get vision result data, this function will update vision
   *         result automatically.
   * @param  vision_type: vision type.
   * @param  obj_info:  object information
   * @retval information value
   */
  int GetValue(sentry_vision_e vision_type, sentry_obj_info_e obj_info,
               int obj_id = 1)
  {
    return SentryFactory_GetValue(&factory, (int)vision_type, obj_info, obj_id);
  }

  char *GetQrCodeValue()
  {
    if (factory.qrcode_state)
    {
      return factory.qrcode_state->qrcode_result[0].str;
    }
    return NULL;
  }

  uint8_t VisionSetDefault(sentry_vision_e vision_type)
  {
    return SentryFactory_VisionSetDefault(&factory, (int)vision_type);
  }

  uint8_t LedSetColor(sentry_led_color_e detected_color,
                      sentry_led_color_e undetected_color,
                      uint8_t level = 1)
  {
    return SentryFactory_LedSetColor(&factory, detected_color, undetected_color, level);
  }

  uint8_t CameraSetAwb(sentry_camera_white_balance_e awb)
  {
    return SentryFactory_CameraSetAwb(&factory, awb);
  }

private:
  SentryFactory factory;
  sentry_vision_state_t *product_vision_state_[kVisionMaxType - 1] = {nullptr};
};

#endif /* SENGO1_H_ */
