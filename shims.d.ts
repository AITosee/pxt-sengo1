declare namespace Sengo1VisionSensor {
  
  //% shim=tosee_sentry::sengo1Begin
  function sengo1Begin(mode: number, addr: number): number;

  //% shim=tosee_sentry::sengo1LedSetColor
  function sengo1LedSetColor(
    detected_color: number,
    undetected_color: number,
    leval: number
  ): number;

  //% shim=tosee_sentry::sengo1SetParamNum
  function sengo1SetParamNum(vision_type: number, max_num: number): number;

  //% shim=tosee_sentry::sengo1SetParam
  function sengo1SetParam(
    vision_type: number,
    param: Buffer,
    param_id: number
  ): number;

  //% shim=tosee_sentry::sengo1VisionSetStatus
  function sengo1VisionSetStatus(status: number, vision_type: number): number;

  //% shim=tosee_sentry::sengo1GetValue
  function sengo1GetValue(
    vision_type: number,
    object_info: number,
    obj_id: number
  ): number;

  //% shim=tosee_sentry::sengo1GetQrCodeValue
  function sengo1GetQrCodeValue(): string;
}
