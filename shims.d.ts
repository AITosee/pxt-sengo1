declare namespace Sengo1 {
  
  //% shim=tosee_sentry::sengo1_Begin
  function sengo1_Begin(mode: number, addr: number): number;

  //% shim=tosee_sentry::sengo1_LedSetColor
  function sengo1_LedSetColor(
    detected_color: number,
    undetected_color: number,
    leval: number
  ): number;

  //% shim=tosee_sentry::sengo1_SetParamNum
  function sengo1_SetParamNum(vision_type: number, max_num: number): number;

  //% shim=tosee_sentry::sengo1_SetParam
  function sengo1_SetParam(
    vision_type: number,
    param: Buffer,
    param_id: number
  ): number;

  //% shim=tosee_sentry::sengo1_VisionSetStatus
  function sengo1_VisionSetStatus(status: number, vision_type: number): number;

  //% shim=tosee_sentry::sengo1_GetValue
  function sengo1_GetValue(
    vision_type: number,
    object_info: number,
    obj_id: number
  ): number;

  //% shim=tosee_sentry::sengo1_GetQrCodeValue
  function sengo1_GetQrCodeValue(): string;
}
