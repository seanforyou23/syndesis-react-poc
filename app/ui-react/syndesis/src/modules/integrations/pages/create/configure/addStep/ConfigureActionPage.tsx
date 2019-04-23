import { getStep, getSteps, WithIntegrationHelpers } from '@syndesis/api';
import { IntegrationEditorLayout } from '@syndesis/ui';
import { WithRouteData } from '@syndesis/utils';
import * as React from 'react';
import { PageTitle } from '../../../../../../shared';
import {
  IntegrationCreatorBreadcrumbs,
  IntegrationEditorSidebar,
} from '../../../../components';
import resolvers from '../../../../resolvers';
import {
  IOnUpdatedIntegrationProps,
  WithConfigurationForm,
} from '../../../../shared';
import {
  IConfigureActionRouteParams,
  IConfigureActionRouteState,
} from '../../../editorInterfaces';

/**
 * This page shows the configuration form for a given action. It's supposed to
 * be used for step 3.add.3 of the creation wizard.
 *
 * Submitting the form will update the integration object adding a *new* step in
 * the [position specified in the params]{@link IConfigureActionRouteParams#position}
 * of the first flow, set up as specified by the form values.
 *
 * This component expects some [url params]{@link IConfigureActionRouteParams}
 * and [state]{@link IConfigureActionRouteState} to be properly set in
 * the route object.
 *
 * **Warning:** this component will throw an exception if the route state is
 * undefined.
 *
 * @todo DRY the connection icon code
 */
export class ConfigureActionPage extends React.Component {
  public render() {
    return (
      <WithIntegrationHelpers>
        {({ addConnection, updateConnection }) => (
          <WithRouteData<
            IConfigureActionRouteParams,
            IConfigureActionRouteState
          >>
            {(
              { actionId, flow, step = '0', position },
              { connection, integration, updatedIntegration },
              { history }
            ) => {
              const stepAsNumber = parseInt(step, 10);
              const positionAsNumber = parseInt(position, 10);
              const stepObject = getStep(integration, 0, positionAsNumber);
              const onUpdatedIntegration = async ({
                action,
                moreConfigurationSteps,
                values,
              }: IOnUpdatedIntegrationProps) => {
                updatedIntegration = await (stepAsNumber === 0
                  ? addConnection
                  : updateConnection)(
                  updatedIntegration || integration,
                  connection,
                  action,
                  0,
                  positionAsNumber,
                  values
                );
                if (moreConfigurationSteps) {
                  history.push(
                    resolvers.create.configure.addStep.configureAction({
                      actionId,
                      connection,
                      flow,
                      integration,
                      position,
                      step: stepAsNumber + 1,
                      updatedIntegration,
                    })
                  );
                } else {
                  history.push(
                    resolvers.create.configure.index({
                      flow,
                      integration: updatedIntegration,
                    })
                  );
                }
              };

              return (
                <WithConfigurationForm
                  connection={connection}
                  actionId={actionId}
                  configurationStep={stepAsNumber}
                  initialValue={stepObject.configuredProperties}
                  onUpdatedIntegration={onUpdatedIntegration}
                >
                  {({ form, submitForm, isSubmitting }) => (
                    <>
                      <PageTitle title={'Configure the action'} />
                      <IntegrationEditorLayout
                        header={<IntegrationCreatorBreadcrumbs step={3} />}
                        sidebar={
                          <IntegrationEditorSidebar
                            steps={getSteps(
                              updatedIntegration || integration,
                              0
                            )}
                            addAtIndex={
                              stepAsNumber === 0 ? positionAsNumber : undefined
                            }
                            addIcon={
                              <img
                                src={connection.icon}
                                width={24}
                                height={24}
                              />
                            }
                            addI18nTitle={`${positionAsNumber + 1}. ${
                              connection.connector!.name
                            }`}
                            addI18nTooltip={`${positionAsNumber + 1}. ${
                              connection.name
                            }`}
                            addI18nDescription={'Configure the action'}
                          />
                        }
                        content={form}
                        cancelHref={resolvers.create.configure.index({
                          flow,
                          integration,
                        })}
                        backHref={resolvers.create.configure.addStep.selectAction(
                          { flow, position, integration, connection }
                        )}
                        onNext={submitForm}
                        isNextLoading={isSubmitting}
                      />
                    </>
                  )}
                </WithConfigurationForm>
              );
            }}
          </WithRouteData>
        )}
      </WithIntegrationHelpers>
    );
  }
}