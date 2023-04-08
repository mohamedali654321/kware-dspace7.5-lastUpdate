import { Component } from '@angular/core';
import { metadataRepresentationComponent } from '../../../../shared/metadata-representation/metadata-representation.decorator';
import { MetadataRepresentationType } from '../../../../core/shared/metadata-representation/metadata-representation.model';
import { ItemMetadataRepresentationListElementComponent } from '../../../../shared/object-list/metadata-representation-list-element/item/item-metadata-representation-list-element.component';

@metadataRepresentationComponent('JournalVolume', MetadataRepresentationType.Item)
@Component({
  selector: 'ds-journal-volume-item-metadata-list-element',
  templateUrl: './journal-volume-item-metadata-list-element.component.html'
})
/**
 * The component for displaying an item of the type OrgUnit as a metadata field
 */
export class JournalVolumeItemMetadataListElementComponent extends ItemMetadataRepresentationListElementComponent {
}
