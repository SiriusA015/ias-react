from enum import Enum
from typing import Optional

from bson import ObjectId
from pydantic import BaseModel, validator, Field

from mainApi.app.auth.models.user import PyObjectId, to_camel
from typing import List

class AlignMethodEnum(str, Enum):
    byRow = "byRow"
    byColumn = "byColumn"

class MergeImgModel(BaseModel):
    fileNames: str = ""
    newImageName: str = ""

class ExperimentModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    user_id: PyObjectId = Field(default_factory=PyObjectId)
    expName: str
    fileNames: List[str]
    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        alias_generator = to_camel

class TileModelDB(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    # reference to the user who uploaded the tile
    user_id: PyObjectId = Field(default_factory=PyObjectId)
    absolute_path: str
    file_name: str
    content_type: str  # MIME type
    width_px: int
    height_px: int
    series: Optional[str] = ""
    offset_x: Optional[int] = 0
    offset_y: Optional[int] = 0
    
    row_index: Optional[int] = 0  # created by regex of name
    column_index: Optional[int] = 0  # created by regex of name
    channel: Optional[str] = "not specified"
    field: Optional[int] = 0
    z_position: Optional[int] = 0
    time_point: Optional[int] = 0
    class Config:
        # this is crucial for the id to work when given a set id from a dict, also needed when using alias_generator
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        alias_generator = to_camel

class NamePattenModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    filename: Optional[str] = ""
    series: Optional[str] = ""
    row: Optional[int] = 0  # created by regex of name
    col: Optional[int] = 0  # created by regex of name
    channel: Optional[str] = "not specified"
    field: Optional[int] = 0
    z_position: Optional[int] = 0
    time_point: Optional[str] = 0
    class Config:
        # this is crucial for the id to work when given a set id from a dict, also needed when using alias_generator
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        alias_generator = to_camel


class AlignedTiledModel(TileModelDB):
    """ offsets are not optional """
    offset_x: int
    offset_y: int

    class Config:
        # this is crucial for the id to work when given a set id from a dict, also needed when using alias_generator
        allow_population_by_field_name = True
        alias_generator = to_camel


class AlignNaiveRequest(BaseModel):
    method: AlignMethodEnum
    rows: int

    @validator('rows')
    def greater_than_or_equal_to_one(cls, v):
        assert v >= 1, "'rows' must be greater or equal to 1"
        return v

    class Config:
        # this is crucial for the id to work when given a set id from a dict, also needed when using alias_generator
        allow_population_by_field_name = True
        alias_generator = to_camel
        schema_extra = {
            "example": {
                "method": "byRow",
                "rows": "5",
            }
        }
